export default function Page() {

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    "use server";
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Access form data
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Example of backend interaction (use your actual API endpoint here)
    try {
      console.log("Submitting form data:", formFields);

      // TODO: Replace with your backend logic (example only)
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formFields),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to send the message. Please try again.");
    }
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold text-center mb-6">
          Contact us!
        </h1>
        <form className="space-y-4" onSubmit={submitForm}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              rows={4}
              className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 rounded-md p-3"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
