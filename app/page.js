import Image from "next/image";
import Link from 'next/link';
import NavBar from "./[components]/navBar";
import Footer from "./[components]/footer";

export default function Home() {
  return (
    <div className="w-full px-40 flex flex-col items-center justify-center">
      <NavBar />
      {/* ABOUT */}
      <div className="flex flex-row items-center justify-center  w-full h-screen">
        <div className="flex flex-col gap-5 items-start justify-center">
          <a className="font-bold text-white text-[80px]" >PAT</a>
          <a className="text-xl text-white">This Pat.</a>
          <a className="text-xl text-white">Pat began his career as a meme trader to spread the laughter across the universe.</a>
          <a className="text-xl text-white">Pat made is making 1000x this bull market.</a>
          <div>
            <button className="bg-orange-500 text-white text-lg hover:bg-orange-300 rounded-full px-6 py-3" >Be a PAT</button>
          </div>
        </div>
        <div >
          <Image
            src="/images/patweb1.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>

      {/* 2222222 */}
      <div  id="about" className="flex flex-row items-center justify-center  h-screen">
        <div>
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <a className="text-xl text-white">Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes. </a>
          <a className="text-xl text-white">And so, he began his new career as a meme trader, swapping Krabby PEPEs for Dogecoins and spreading laughter across the universe.  He traded doge for pepe, pepes for doge and atlast he accumulated lots for BTC , ETH and SOL with the money he made and became a RICHEST GUY IN TH TOWN</a>
        </div>
      </div>

      {/* 33333 */}
      <div className="flex flex-row items-center justify-center  h-screen">
        <div className="flex flex-col gap-5 items-center justify-start">
          <a className="text-xl text-white">Just as he was about to give up hope, a blockchain portal shaped like a giant Krabby Patty appeared out of nowhere, engulfing Pat and transporting him to a distant galaxy where memes ruled supreme.</a>
          <a className="text-xl text-white">Surrounded by DOGEs wearing top hats and rare PEPEs doing the Macarena, Pat found himself in a world of blockchain memes, where every transaction was immortalized in the digital ledger with Spongebob's face. Floating in space, Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes.</a>
        </div>
        <div >
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* TOKENOMICS */}
      <div
        id="tokenomics"
        className="flex flex-row items-center justify-center  h-screen">
        <div >
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <a className="font-bold text-white text-[80px]">Tokenomics</a>
          <a className="text-xl text-white">Total supply: 100000000000</a>
          <a className="text-xl text-white">No Taxes, No Bullshit. It’s that simple.</a>
          <a className="text-xl text-white">LP tokens are burnt, and contract ownership is renounced.</a>

        </div>
      </div>
      {/* ROADMAP */}
      <div
        id="roadmap"
        className="flex flex-row items-center justify-center  h-screen">
        <div >
          <Image
            src="/images/patweb2.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col gap-5 items-start justify-center">
          <a className="font-bold text-white text-[80px]">Roadmap</a>
          <a className="text-xl text-white">Phase I: 10x</a>
          <a className="text-xl text-white">Phase II: 100x</a>
          <a className="text-xl text-white">Phase III: 1000x</a>
          <a className="text-xl text-white">Phase IV: 100000x</a>
          <a className="text-xl text-white">Phase V: To the moon.</a>
        </div>
      </div>
    <Footer />
    </div>
  );
}
