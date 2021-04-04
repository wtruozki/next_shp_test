import Layout from "../components/Layout";
import Image from "next/image";
const Contact = () => {
  return (
    <Layout title="contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Content info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/colors_hipo.png"
            width={60}
            height={60}
            alt="hipo"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">Email</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
