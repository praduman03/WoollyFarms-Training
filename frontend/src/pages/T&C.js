import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../App.css";

function TC() {
  return (
    <div>
      <Navbar />
      <div className="TC-container">
        <div className="TC-title">
          <h1>TERMS & CONDITION</h1>
        </div>
        <div className="TC-details">
          <h2>Description of Service</h2>
          <p>
            Vigilanty is a website designed to strengthen neighborhoods by
            facilitating the reporting of suspicious activities and sharing
            community announcements. It provides a platform for users to
            connect, contribute information, and engage in community safety
            initiatives.
          </p>
          <br />
          <h2>User Responsibilities</h2>
          <p>
            a. Account Creation: To use Vigilanty, you must create a user
            account. You are responsible for maintaining the confidentiality of
            your account details, including your username and password.
            <br />
            b. Accurate Information: You agree to provide accurate and
            up-to-date information when creating your account and when
            submitting any reports or announcements on the website.
            <br />
            c. Compliance with Laws: You must use Vigilanty in compliance with
            all applicable laws and regulations.
            <br />
            d. User Conduct: You are responsible for your conduct while using
            Vigilanty. You agree not to engage in any unlawful, abusive, or
            harmful activities, including but not limited to spamming,
            harassing, or defaming others.
            <br />
            e. Reporting Suspicious Activities: When reporting suspicious
            activities, you agree to provide accurate and detailed information
            to the best of your ability. However, you acknowledge that Vigilanty
            does not guarantee the accuracy or reliability of the reported
            information.
            <br />
          </p>
          <br />
          <h2>Intellectual Property</h2>
          <p>
            a. Ownership: Vigilanty and its content, including but not limited
            to logos, trademarks, text, graphics, and software, are the property
            of Vigilanty or its licensors and are protected by intellectual
            property laws.
            <br />
            b. Limited License: Vigilanty grants you a limited, non-exclusive,
            non-transferable license to access and use the website and its
            content for personal, non-commercial purposes. You may not modify,
            reproduce, distribute, or create derivative works based on Vigilanty
            without explicit permission.
            <br />
          </p>
          <br />
          <h2>Privacy Policy</h2>
          <p>
            Vigilanty respects your privacy and handles your personal
            information in accordance with our Privacy Policy. By using
            Vigilanty, you consent to the collection, use, and storage of your
            information as described in the Privacy Policy.
          </p>
          <br />
          <h2>Modifications</h2>
          <p>
            Vigilanty reserves the right to modify or discontinue any aspect of
            the website, including these Terms and Conditions, at any time
            without prior notice. It is your responsibility to review these
            terms periodically for any updates or changes.
          </p>
          <br />
          <h2>Termination</h2>
          <p>
            Vigilanty may terminate or suspend your access to the website, in
            whole or in part, at any time without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach
            these Terms and Conditions.
          </p>
          <br />
          <h2>Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of Gov. of India. Any disputes arising from
            the use of Vigilanty shall be subject to the exclusive jurisdiction
            of the courts located in India.
          </p>
          <br />
          <p>
            By using Vigilanty, you acknowledge that you have read, understood,
            and agreed to these Terms and Conditions. If you have any questions
            or concerns, please contact us at vigilantyteam@gmail.com.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TC;
