import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  console.log(searchNumber);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q7dot1, setQ7dot1] = useState(null);
  const [q7dot1dot1, setQ7dot1dot1] = useState(null);
  const [q8dot1, setQ8dot1] = useState(null);
  const [q8dot2, setQ8dot2] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11, setQ11] = useState(null);
  const [q12, setQ12] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://localhost:5010/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q7dot1value = (e) => {
    setQ7dot1(e.target.value);
  };
  const q7dot1dot1value = (e) => {
    setQ7dot1dot1(e.target.value);
  };
  const q8dot1value = (e) => {
    setQ8dot1(e.target.value);
  };
  const q8dot2value = (e) => {
    setQ8dot2(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11value = (e) => {
    setQ11(e.target.value);
  };
  const q12value = (e) => {
    setQ12(e.target.value);
  };
  const agent = sessionStorage.getItem("agent");
  console.log(agent);
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans7dot1: q7dot1,
      ans7dot1dot1: q7dot1dot1,
      ans8dot1: q8dot1,
      ans8dot2: q8dot2,
      ans9: q9,
      ans10: q10,
      ans11: q11,
      ans12: q12,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://localhost:5010/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(answer);
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
          // (next === true && "none") || pressSearch === false
          //   ? "block"
          //   : "none",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ২. আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি ।স্যার আপনি কি ফ্রি আছেন,
          আমি কি আপনার সাথে একটু কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জনানো যাচ্ছে যে আপনার কলটি রেকর্ড করা হচ্ছে এবং তা
        ভবিষ্যতে পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৩. স্যার, আমি কি জানতে পারি আপনার বয়স কত?</h6>
        <p className="text-secondary">
          (যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা
          ধন্যবাদ দিয়ে কথা শেষ করে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="18-24">১৮-২৪</option>
            <option value="25-33">২৫-৩৩</option>
            <option value="34-50">৩৪-৫০</option>
            <option value="50+">৫০+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "18-24" || q3 === "25-33" || q3 === "34-50" || q3 === "50+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৪. স্যার, আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ হয় তবে জিজ্ঞসা করবে ৫নং প্রশ্ন। যদি উত্তর না আসে তবে
          ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫. স্যার, আমি কি জানতে পারি, আপনি কোন ব্র্যান্ড এর সিগারেট ধুমপান
          করেন?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="royals">রয়েলস</option>
            <option value="marise">মেরিস</option>
            <option value="real">রিয়েল</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5 === "derby" ||
            q5 === "pilot" ||
            q5 === "hollywood" ||
            q5 === "royals" ||
            q5 === "marise" ||
            q5 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৬. স্যার, আপনার এই সিগারেটের কোন দিকটা বেশি ভালো লেগেছে?</h6>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="design">ডিজাইন</option>
            <option value="taste">স্বাদ</option>
            <option value="habbit">অভ্যাস</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="price">মূল্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5 === "real" ||
            q6 === "design" ||
            q6 === "taste" ||
            q6 === "habbit" ||
            q6 === "availability" ||
            q6 === "price"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৭. স্যার, গত এক সপ্তাহের মধ্যে আপনার সাথে কি কোন Real/JTI/Navy
          কোম্পানির প্রতিনিধি/BA এর সাথে দেখা হয়েছিল?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div style={{ display: q7 === "no" ? "block" : "none" }} className="mt-2">
        <h6>
          ৭.১ স্যার, আপনি কি Real এর নতুন সীমিত সময়ের জন্যে প্যাক সম্পর্কে কি
          কিছু জানেন?
        </h6>
        <Form.Group onChange={q7dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q7dot1 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>৭.১.১ স্যার, আমি কি জানতে পারি, আপনি কার মাধ্যমে জানতে পেরেছেন?</h6>
        <Form.Group onChange={q7dot1dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="ba">BA</option>
            <option value="fnf">FNF</option>
            <option value="retailer">Retailer</option>
            <option value="others">Others</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q7 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৮.১. প্রতিনিধি কি আপনাকে Real এর নতুন সীমিত সময়ের জন্যে প্যাক সম্পর্কে
          কিছু জানিয়েছেন?
        </h6>
        <Form.Group onChange={q8dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q8dot1 === "yes" || q8dot1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৮.২। আপনি কি দোকান হতে Real Stick/শলাকা/প্যাক ক্রয় করেছেন?</h6>
        <Form.Group onChange={q8dot2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div>
        <div
          style={{
            display:
              q8dot2 === "yes" ||
              q8dot2 === "no" ||
              q7dot1dot1 === "ba" ||
              q7dot1dot1 === "fnf" ||
              q7dot1dot1 === "retailer" ||
              q7dot1dot1 === "others"
                ? "block"
                : "none",
          }}
          className="mt-2"
        >
          <h6>৯. আপনার নিকটস্থ চায়ের দোকানে কি Real সিগারেট পাওয়া যায়?</h6>
          <Form.Group onChange={q9value} as={Row}>
            <Form.Control as="select" className="w-50 ml-3">
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div>
        <div
          style={{
            display: q9 === "yes" || q9 === "no" ? "block" : "none",
          }}
          className="mt-2"
        >
          <h6>১০. আপনি কি ভবিষ্যতে Real সিগারেট পান করবেন?</h6>
          <Form.Group onChange={q10value} as={Row}>
            <Form.Control as="select" className="w-50 ml-3">
              <option>...</option>
              <option value="yes">হ্যাঁ</option>
              <option value="no">না</option>
            </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div
        style={{
          display: q10 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১১. স্যার, আমি কি জানতে পারি, আপনি কেন ভবিষ্যতে Real সিগারেট পান
          করবেন?
        </h6>
        <Form.Group onChange={q11value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="design">ডিজাইন</option>
            <option value="taste">স্বাদ</option>
            <option value="habbit">অভ্যাস</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="price">মূল্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q10 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১২. স্যার, আমি কি জানতে পারি, আপনি কেন ভবিষ্যতে Real সিগারেট পান করবেন
          না?
        </h6>
        <Form.Group onChange={q12value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="design">ডিজাইন</option>
            <option value="taste">স্বাদ</option>
            <option value="habbit">অভ্যাস</option>
            <option value="availability">সহজলভ্যতা</option>
            <option value="price">মূল্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "-18" ||
            q4 === "no" ||
            q7dot1 === "no" ||
            q11 === "design" ||
            q11 === "taste" ||
            q11 === "habbit" ||
            q11 === "availability" ||
            q11 === "price" ||
            q12 === "design" ||
            q12 === "taste" ||
            q12 === "habbit" ||
            q12 === "availability" ||
            q12 === "price"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
