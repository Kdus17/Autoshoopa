import { HiOfficeBuilding } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import ContactFormDetail from "./Details/ContactFormDetail";

export default function Contact() {
  return (
    <div className="flex flex-col w-full text-black font-mono bg-gray-100">
      <div className="bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/page-bc.jpg')] flex flex-col items-center justify-center h-75 text-white gap-1 mb-4">
        <p className="text-5xl font-bold">Contact</p>
      </div>
      <div className="flex flex-col md:flex-row mx-25 border-1 border-black text-center items-center justify-around rounded-md py-20 gap-8 ">
        <div className="flex flex-col gap-3">
          <p className="text-red-300 ">Get in Touch</p>
          <h1 className="text-4xl font-semibold">
            We are at your
            <br />
            Disposal 7 days a<br />
            week!
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-1">
            <HiOfficeBuilding className="text-yellow-400" />
            Office Location
          </div>
          <p>Addis Ababa</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center">
            <FaPhone className="text-yellow-400" />
            <p>Phone Number</p>
          </div>
          +251900000000
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1 items-center justify-center">
            <TfiEmail className="text-yellow-400 " />
            <p className="text-center">Email Us</p>
          </div>
          <p>autoshoppa@gmail.com</p>
        </div>
      </div>
      <div className="mt-15 flex flex-col gap-4 items-center border-1 border-gray-200 w-2/3 md:w-1/2 rounded-md shadow-xl self-center bg-white">
        <p className="text-yellow-400">Leave Your Message.</p>
        <h1 className="text-4xl font-bold text-center">
          We would love to
          <br /> hear from you
        </h1>
        <ContactFormDetail />
      </div>
    </div>
  );
}
