// components/Certifications.tsx
import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="my-16 px-6 text-center">
      <h2 className="mb-10 text-3xl font-bold">Professional Certifications</h2>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Google Cybersecurity Certificate */}
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-left">
          <h3 className="mb-1 text-xl font-semibold">
            Google Cybersecurity Professional Certificate
          </h3>
          <p className="text-sm text-gray-400">Google • 2023</p>
          <div className="mt-3 flex flex-col gap-2">
            <span className="w-max rounded-full bg-emerald-700 px-3 py-1 text-sm text-white">
              Completed
            </span>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/4YNU3WT9CBPY" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="w-max text-sm text-blue-400 underline hover:text-blue-600"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* ISC2 CC */}
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-left">
          <h3 className="mb-1 text-xl font-semibold">
            Certified in Cybersecurity (CC)
          </h3>
          <p className="text-sm text-gray-400">ISC2 • 2025</p>
          <div className="mt-3 flex flex-col gap-2">
            <span className="w-max rounded-full bg-emerald-700 px-3 py-1 text-sm text-white">
              Completed
            </span>
            <a
              href="https://www.credly.com/badges/9d80a2dc-4c27-4e81-84f5-a7b66cd1f7ad/public_url" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="w-max text-sm text-blue-400 underline hover:text-blue-600"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* CompTIA Security+ */}
        <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 text-left">
          <h3 className="mb-1 text-xl font-semibold">CompTIA Security+</h3>
          <p className="text-sm text-gray-400">CompTIA • 2025</p>
          <div className="mt-3">
            <span className="w-max rounded-full bg-yellow-600 px-3 py-1 text-sm text-white">
              In Progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
