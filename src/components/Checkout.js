import React from "react";
import { FaRegCheckCircle, FaAngleUp, FaPlus } from "react-icons/fa";
import visaIcon from "../assets/Visa.png";
import creditIcon from "../assets/credit-icon.png";
import addCardIcon from "../assets/add-card.png";

const Checkout = () => {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
        <div class="col-span-1 sm:col-span-2">
          <div className="w-full rounded-md p-6 border border-gray-300 text-left"> {/* Delivery */}
            <div className="flex m-auto mb-4 items-center">
              <div className="font-bold text-2xl mr-2">Delivery</div>
              <FaRegCheckCircle size={23} color="green" />
            </div>
            <h3 className="font-bold text-base mb-2">Mobile Entry - Free</h3>
            <p className="text-sm">Tickets Available by Sun Apr 3, 2022</p>
            <p className="text-sm">
              These mobile tickets will be transferred directly to you from a
              trusted seller. We'll email you instructions on how to accept them
              on the original ticket provider's mobile app.
            </p>
          </div>
          <div className="w-full rounded-md p-4 border border-gray-300 mt-4"> {/* Payment */}
            <div className="flex m-auto mb-4 items-center">
              <div className="font-bold text-2xl mr-2">Payment</div>
              <FaRegCheckCircle size={23} color="green" />
            </div>
            <div className="pl-4 border-b">
                <h3 className="font-bold text-base mb-2 text-left">Use Credit / Debit Card</h3>
                <div className="h-60 py-4">
                    <div className="flex h-[50%]">
                        <input type="radio" class="w-6 self-start h-6 rounded-full mt-2.5 mr-2.5"  />
                        <img src={visaIcon} className="mr-2.5 self-start" width={60} height={60} />
                        <div className="block text-left">
                            <h3 className="font-bold text-base mb-2">Visa - 9999</h3>
                            <p className="text-base">User Name | exp. 00/11</p>
                            <p className="text-base">
                                <a type="button" className="cursor-pointer text-blue-500">Edit</a>&nbsp;|&nbsp; 
                                <a type="button" className="cursor-pointer text-blue-500">Delete</a>
                            </p>
                        </div>
                    </div>
                    <div className="text-left ml-10 h-[50%]">
                        <p className="text-base mb-2">Security Code</p>
                        <div className="flex items-center">
                            <div className="w-36 h-10 border-gray-400 rounded-sm border-2 p-2.5 mr-2"></div>
                            <img src={creditIcon} width={60} height={60} className="mr-2"/>
                            <p className="text-sm">3-digits on back of card</p>
                        </div>
                    </div>
                </div>
                <div className="text-left mb-4 flex items-center">
                    <FaPlus size={25} color="blue" />
                    <img src={addCardIcon} width={60} height={60} className="mx-4"/>
                    <a href="#" className="text-blue-500">Add New Card</a>
                </div>
            </div>
            <div className="pl-4">
                <h3 className="font-bold text-base my-4 text-left">Or Pay with</h3>
                <p className="font-medium text-sm text-left">By using a digital wallet and continuing past this page, you 
                    have read and are accepting the <a href="#" className="text-blue-500">Terms of Use.</a> </p> 
            </div>
          </div>
        </div>
        <div class="col-span-1 w-full rounded-md p-4 border border-gray-300 h-full"> {/* Total */}
            <div className="flex items-center">
                <div className="font-bold text-2xl mr-2">Total</div>
                <div className="font-bold text-2xl ml-auto">$549.11</div>
                <FaAngleUp size={20} color ="grey"/>
            </div>
            <div className="py-6">
                <h3 className="font-bold text-base mb-2 text-left">Tickets</h3>
                <div className="flex">
                    <p className="text-sm mr-auto">Resale Tickets: $229.00 x 2</p>
                    <p className="text-sm">$458.00</p>
                </div>
            </div>
            <div className="text-left">
                <h3 className="font-bold text-base mb-2">Notes from Seller</h3>
                <p className="text-sm mr-auto">xfr XFER Proff of at least one dose of COVID-19</p>
                <p className="text-sm mr-auto">vaccination for ages 5 to 11 and guests ages 12 and FaAngleUp
                    will be required to show proff of two COVID-19 vaccine doses or one dose
                    of the Johnson & Johnson vaccine.
                    Masks must be worn.
                </p>
            </div>
            <div className="py-6 text-left">
                <h3 className="font-bold text-base mb-2">Fees</h3>
                <div className="flex">
                    <p className="text-sm mr-auto">Service Fee: $44.08 x 2</p>
                    <p className="text-sm">$88.16</p>
                </div>
                <div className="flex">
                    <p className="text-sm mr-auto">Order Processing Fee</p>
                    <p className="text-sm">$2.95</p>
                </div>
            </div>
            <div className="py-6 text-left">
                <h3 className="font-bold text-base mb-2">Delivery</h3>
                <p className="text-sm mr-auto">Mobiel Entry</p>
            </div>
            <div className="text-left">
                <a type="button" className="cursor-pointer text-sm text-blue-500">Cancel Order</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
