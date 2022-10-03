import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
export default function Faqs() {
  return (
    <div>
      <Navbar />
      <section className="grid md:grid-cols-3 mt-8 mb-10">
        <div className="h-fit mb-5 w-fit text-justify p-4 rounded-md shadow-2xl bg-indigo-500 md:mx-10">
          <span>
            {/* <h2 className="font-bold text-2xl">What is Bitcoin?</h2> */}
            <p>
              Bitcoin is a cryptocurrency invented in 2008 by an unknown person
              or group of people using the name Satoshi Nakamoto and started in
              2009 when its implementation was released as open-source software.
            </p>
            <p className="text-right">--Anonymous</p>
          </span>
        </div>
        <div className="h-fit mb-5 w-fit text-justify p-4 rounded-md shadow-2xl bg-indigo-500 md:mx-10">
          <span>
            {/* <h2 className="font-bold text-2xl">What is Bitcoin?</h2> */}
            <p>
              Bitcoin is a cryptocurrency invented in 2008 by an unknown person
              or group of people using the name Satoshi Nakamoto and started in
              2009 when its implementation was released as open-source software.
            </p>
            <p className="text-right">--Anonymous</p>
          </span>
        </div>
        <div className="h-fit mb-5 w-fit text-justify p-4 rounded-md shadow-2xl bg-indigo-500 md:mx-10">
          <span>
            {/* <h2 className="font-bold text-2xl">What is Bitcoin?</h2> */}
            <p>
              Bitcoin is a cryptocurrency invented in 2008 by an unknown person
              or group of people using the name Satoshi Nakamoto and started in
              2009 when its implementation was released as open-source software.
            </p>
            <p className="text-right">--Jack Pearson</p>
          </span>
        </div>
        <div className="h-fit mb-5 w-fit text-justify p-4 rounded-md shadow-2xl bg-indigo-500 md:mx-10">
          <span>
            {/* <h2 className="font-bold text-2xl">What is Bitcoin?</h2> */}
            <p>How do i go about the ethereum metamask?</p>
            <p className="text-right">--Sophie kev</p>
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
}
