"use client";

import Container from "@/app/global-components/Container/Container";

function PrizeCard({ prize_heading, cash_amount, voucher_amount }) {
  return (
    <div className="border-8  shadow-gray-500 rounded-lg shadow-2xl border-purple-600 m-2 max-w-sm  lg:w-96 p-4 bg-purple-400 bg-opacity-10 transition-transform duration-300 ease-in hover:scale-105">
      <h2 className="text-3xl font-bold">{prize_heading}</h2>
      <p className="text-yellow-btn-primary text-2xl font-semibold">
        Cash Prize: ₹{cash_amount}
      </p>
      <p className="text-xl font-semibold">Vouchers: ₹{voucher_amount}</p>
      <p className="text-lg italic">+ Exciting Goodies</p>
    </div>
  );
}
   
//for centering the text...
const centering = {
  textAlign: 'center'
};

export default function Prizes() {
  return (
    <main className="mt-4">
      <Container>
        <h2 className="font-bold text-6xl pb-6 mb-4" style={centering}>Prizes</h2>
      </Container>

      <Container customClasses={"flex flex-col lg:flex-row"}>
        <PrizeCard
          prize_heading={"Winning Team"}
          cash_amount={"15000"}
          voucher_amount={"20000"}
        />
        <PrizeCard
          prize_heading={"First Runner Up"}
          cash_amount={"8000"}
          voucher_amount={"20000"}
        />
        <PrizeCard
          prize_heading={"Second Runner Up"}
          cash_amount={"5000"}
          voucher_amount={"20000"}
        />
        <PrizeCard
          prize_heading={"All Girls Team"}
          cash_amount={"1000"}
          voucher_amount={"20000"}
        />
        <PrizeCard
          prize_heading={"All Fresher's Team"}
          cash_amount={"1000"}
          voucher_amount={"20000"}
        />
        
      </Container>
      <><br></br></>

      
    </main>
  );
}
