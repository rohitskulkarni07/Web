Feature("Sending Message on WhatsApp");

Scenario("Send a message", ({ I }) => {
  I.amOnPage("https://web.whatsapp.com/");
  I.wait(10); // Wait for the user to scan the QR code and load the page

  I.waitForVisible('[title="Dhanashree🌟"]', 20);
  I.click('[title="Dhanashree🌟"]');

  I.waitForVisible('[data-testid="conversation-compose-box-input"]', 10);
  I.click('[data-testid="conversation-compose-box-input"]');
  I.fillField(
    '[data-testid="conversation-compose-box-input"]',
    "Hello, World!"
  );
  I.pressKey("\uE007"); // Press Enter to send the message

  I.wait(5); // Wait for a moment to let the message send
});
