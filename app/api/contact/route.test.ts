import { describe, test, expect, mock, beforeEach } from "bun:test";

// Mock nodemailer before importing the route
const mockSendMail = mock(async () => ({}));
const mockCreateTransport = mock(() => ({ sendMail: mockSendMail }));

mock.module("nodemailer", () => ({
  default: { createTransport: mockCreateTransport },
}));

// Set env var before importing
process.env.GMAIL_APP_PASSWORD = "test-pass";

const { POST } = await import("./route");

function makeRequest(body: unknown, ip = "1.2.3.4") {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  }) as unknown as import("next/server").NextRequest;
}

const validBody = {
  name: "Test User",
  email: "test@example.com",
  subject: "Hello",
  message: "This is a test message, at least ten chars.",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    mockSendMail.mockClear();
    mockCreateTransport.mockClear();
  });

  test("valid body → 200 { success: true }", async () => {
    const res = await POST(makeRequest(validBody, "10.0.0.1"));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(mockSendMail).toHaveBeenCalledTimes(1);
  });

  test("missing name → 400", async () => {
    const res = await POST(makeRequest({ ...validBody, name: "" }, "10.0.0.2"));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(typeof json.error).toBe("string");
    expect(json.error.length).toBeGreaterThan(0);
  });

  test("invalid email → 400", async () => {
    const res = await POST(makeRequest({ ...validBody, email: "not-an-email" }, "10.0.0.3"));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(typeof json.error).toBe("string");
  });

  test("missing subject → 400", async () => {
    const res = await POST(makeRequest({ ...validBody, subject: "" }, "10.0.0.4"));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(typeof json.error).toBe("string");
  });

  test("message too short → 400", async () => {
    const res = await POST(makeRequest({ ...validBody, message: "short" }, "10.0.0.5"));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(typeof json.error).toBe("string");
  });

  test("rate limit: 6th request from same IP → 429", async () => {
    const ip = "10.0.1.1";
    // First 5 should succeed
    for (let i = 0; i < 5; i++) {
      const res = await POST(makeRequest(validBody, ip));
      expect(res.status).toBe(200);
    }
    // 6th should be rate-limited
    const res = await POST(makeRequest(validBody, ip));
    expect(res.status).toBe(429);
    const json = await res.json();
    expect(typeof json.error).toBe("string");
  });
});
