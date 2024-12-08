/** @format */

import React from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("submiting the form....", data);
    reset();
  }

  return (
    <section className="bg-white dark:bg-gray-900 mt-5">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#F26B0F] dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Craving support? Need help with your orders? Have feedback on our
          services? We're here to ensure you have the best experience with your
          favorite food!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              id="email"
              className="shadow-sm bg-gray-50 border p-3 outline-none w-full border-[#F26B0F] text-gray-900 text-sm rounded-lg dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="youremail@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              {...register("orderId", {
                required: "",
              })}
              htmlFor="order-id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Order ID (if applicable)
            </label>
            <input
              {...register("orderId", {
                required: "Order ID is required",
                minLength: {
                  value: 6,
                  message: "Order ID must be at least 6 characters",
                },
              })}
              type="text"
              id="order-id"
              className="block p-3 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#F26B0F] dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="Enter your order ID here"
            />
            {errors.orderId && (
              <p className="text-sm text-red-700">{errors.orderId.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
              type="text"
              id="subject"
              className="block p-3 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#F26B0F] dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="What can we help you with?"
            />
            {errors.subject && (
              <p className="text-sm text-red-700">{errors.subject.message}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-[#F26B0F] outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Let us know what's on your mind..."></textarea>
            {errors.message && (
              <p className="text-sm text-red-700">{errors.message.message}</p>
            )}
          </div>
          <div className="flex justify-center w-full">
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-3 px-5 max-w-52 w-full text-sm font-medium text-center text-white rounded-lg bg-[#F26B0F] hover:scale-110 transition-all">
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
