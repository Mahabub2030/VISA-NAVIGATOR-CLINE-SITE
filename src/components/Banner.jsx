import { FaFileAlt, FaShieldAlt, FaWallet } from "react-icons/fa";
import Silder from "./Silder";


const Banner = () => {
  return (
    <div className=" mt-10 rounded-xl bg-rose-50">
      <Silder></Silder>
      {/* First Banner */}



      {/* Second Banner */}
      <div className="mt-8">
        <div className="hero bg-base-300 container mx-auto animate-slide-in">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold animate-pulse text-center p-4">Visa Insights Explorer!</h1>
              <p className="py-6">
                Experience unparalleled adventures and memories. Your dream destination awaits you.
                Let us take care of the journey for you.
              </p>
            </div>
            <div>
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 space-y-5">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
              alt="Australia" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Australia
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Discover the stunning landscapes and unique wildlife of Australia.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Travel</div>
              <div className="badge badge-outline">Adventure</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
              alt="Canada" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Canada
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Experience the breathtaking nature and vibrant cities of Canada.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Nature</div>
              <div className="badge badge-outline">Culture</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
              alt="Italy" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Italy
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Explore the rich history and exquisite cuisine of Italy.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">History</div>
              <div className="badge badge-outline">Cuisine</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
              alt="Japan" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Japan
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Discover the harmony of tradition and technology in Japan.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tradition</div>
              <div className="badge badge-outline">Technology</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
              alt="India" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              India
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Experience the diversity and vibrant culture of India.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Culture</div>
              <div className="badge badge-outline">Diversity</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="United States" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              United States
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Explore the vast landscapes and iconic landmarks of the USA.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Landmarks</div>
              <div className="badge badge-outline">Adventure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Section */}
      <div className="">
        <div className="hero bg-base-200 container mx-auto animate-fade-in">
          <div className="hero-content flex-col lg:flex-row-reverse">

            <div>
              <h1 className="text-5xl font-bold animate-bounce text-center p-2">Comprehensive Travel  Expedition Framework</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi </p>

              <div className="bg-gray-900 text-white min-h-screen py-10 px-5 mt-10 rounded-2xl">
                <h1 className="text-3xl font-bold text-center mb-8">
                  Comprehensive Travel Expedition Framework
                </h1>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Strategic Documentation */}
                  <div className="border-2 border-blue-500 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaFileAlt className="text-blue-500 text-3xl" />
                      <h2 className="ml-3 text-xl font-bold">Strategic Documentation</h2>
                    </div>
                    <p className="text-gray-400 mb-4">3-4 weeks before travel</p>
                    <p className="mb-4">
                      Comprehensive document preparation and verification
                    </p>
                    <div>
                      <h3 className="font-semibold mb-2">Key Action Items:</h3>
                      <ul className="list-disc ml-5">
                        <li>Passport validity check (minimum 6 months beyond travel date)</li>
                        <li>Visa document compilation</li>
                        <li>Digital and physical document backups</li>
                        <li>Translation of critical documents</li>
                      </ul>
                    </div>
                  </div>

                  {/* Financial & Insurance Readiness */}
                  <div className="border-2 border-green-500 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaWallet className="text-green-500 text-3xl" />
                      <h2 className="ml-3 text-xl font-bold">
                        Financial & Insurance Readiness
                      </h2>
                    </div>
                    <p className="text-gray-400 mb-4">2-3 weeks before departure</p>
                    <p className="mb-4">
                      Financial planning and travel protection strategies
                    </p>
                    <div>
                      <h3 className="font-semibold mb-2">Key Action Items:</h3>
                      <ul className="list-disc ml-5">
                        <li>Travel insurance coverage verification</li>
                        <li>International banking notifications</li>
                        <li>Currency exchange and payment method planning</li>
                        <li>Emergency fund preparation</li>
                      </ul>
                    </div>
                  </div>

                  {/* Pre-Departure Risk Management */}
                  <div className="border-2 border-red-500 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FaShieldAlt className="text-red-500 text-3xl" />
                      <h2 className="ml-3 text-xl font-bold">
                        Pre-Departure Risk Management
                      </h2>
                    </div>
                    <p className="text-gray-400 mb-4">1-2 weeks before travel</p>
                    <p className="mb-4">Safety and contingency planning</p>
                    <div>
                      <h3 className="font-semibold mb-2">Key Action Items:</h3>
                      <ul className="list-disc ml-5">
                        <li>Country-specific health and safety research</li>
                        <li>Emergency contact documentation</li>
                        <li>Local embassy registration</li>
                        <li>Travel advisory monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* start */}

            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

