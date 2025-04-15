import { HiOfficeBuilding } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/page-bc.jpg')] flex flex-col items-center justify-center h-75 text-white gap-1">
        <p className="text-5xl font-bold">Contact</p>
        <a href="#" className="outline">
          Home Page
        </a>
      </div>
      <div className="flex flex-col md:flex-row mx-25 border-1 border-black text-center items-center justify-around rounded-md py-20 gap-8 ">
        <div className="flex flex-col gap-3">
          <p className="text-red-300">Get in Touch</p>
          <h1 className="text-4xl font-semibold">
            We are at your
            <br />
            disposal 7 days a<br />
            week!
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-1">
            <HiOfficeBuilding className="text-yellow-400" />
            Office Location
          </div>
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center">
            <FaPhone className="text-yellow-400" />
            <p>Phone Number</p>
          </div>
          (229) 555-0109
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center justify-center">
            <TfiEmail className="text-yellow-400 " />
            <p className="text-center">Email Us</p>
          </div>
          <p>contact@example.com</p>
        </div>
      </div>
      <div className="mt-15 flex flex-col gap-4 items-center">
        <p className="text-yellow-400">Leave Your Message.</p>
        <h1 className="text-4xl font-bold text-center">
          We would love to
          <br /> hear from you
        </h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-2 ">
            <input
              type="text"
              placeholder="Your Name"
              className="border-1 border-black py-2 px-2  rounded-sm w-120 "
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="border-1 border-black py-2 px-2 rounded-sm w-120"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border-1 border-black py-2 px-2  rounded-sm w-120"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              placeholder="Your Comment"
              className="border-1 border-black py-2 px-2 rounded-sm h-35 w-120 md:w-100 "
            />
            <button
              className="border-1 border-black py-2 px-2 rounded-sm hover:bg-yellow-400 w-1/2 
            transition delay-150 duration-300 ease-in-out hover:-translate-y-1 flex flex-row items-center justify-center"
            >
              Submit <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
