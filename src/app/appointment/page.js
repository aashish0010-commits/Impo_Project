import React from 'react';

function page() {
  return (
    <>
      <div className="md:h-[950px] h-[850px] flex flex-col">
        <div className="flex-1">
          <div className="max-w-5xl relative top-[130px] md:top-[80px] mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Book an Appointment</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" required />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" required />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex space-x-2">
                  <select id="country-code" name="country-code" className="p-2 w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="+61">+977 (Nepal)</option>
                    <option value="+91">+91 (India)</option>
                    {/* Add more country options as needed */}
                  </select>
                  <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-2/3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Select Doctor</label>
                <select id="doctor" name="doctor" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Select a doctor</option>
                  <option value="dr1">Dr. John Doe</option>
                  <option value="dr2">Dr. Jane Smith</option>
                  <option value="dr3">Dr. Mike Johnson</option>
                  {/* Add more doctor options as needed */}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="disease" className="block text-sm font-medium text-gray-700">Select Disease</label>
                <select id="disease" name="disease" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  <option value="">Select a disease</option>
                  <option value="flu">Flu</option>
                  <option value="cold">Common Cold</option>
                  <option value="cough">Cough</option>
                  <option value="headache">Headache</option>
                  {/* Add more disease options as needed */}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Appointment Date</label>
                <input type="date" id="date" name="date" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Appointment Time</label>
                <input type="time" id="time" name="time" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any special requests?" rows={4} defaultValue={""} />
              </div>

              <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
