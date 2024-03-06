
import { Box, Typography, Container, Button } from "@mui/material"
import DrawerAppBar from "../component /nav"
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Box>
          <Typography variant="h1" fontFamily={"fantasy"} color={"white"}>PAT</Typography>

          <Container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Image
              src="/patweb2.png"
              width={600}
              height={600}
              alt="Picture of the author"
            />
            <Box>
              <Typography fontFamily={"cursive"} variant="h4" color={"white"}>Hi , I'm Pat. I began my career as a meme trader to spread the laughter across the universe. </Typography>
              <Button variant="contained" sx={{ mt: '2rem' }}>Be a PAT</Button>
            </Box>

          </Container>

        </Box>
      </main>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Typography variant="h2" fontFamily={"fantasy"} color={"white"} style={{ fontWeight: 'bold' }}>ABOUT</Typography>
        <Container sx={{ display: 'flex', flexDirection: 'row', mt: '3rem' }}>
          <Typography variant="h5" fontFamily={"serif"} color={"white"} width={2 / 3}>Patick (PAT) woke up one sunny morning in Bikini Bottom, excited for a day of adventure. However, as he looked around, he realized he had nothing planned and nowhere to go. Feeling a mix of boredom and frustration, Pat decided to wander aimlessly around town, hoping something exciting would happen but nothing special happens. </Typography>
          <Box>
            <Image
              src="/patbeach copy.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </Box>


        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'row', mt: '3rem' }} >
          <Box >
            <Image
              src="/patgate.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </Box>

          <Typography variant="h5" fontFamily={"serif"} color={"white"} width={2 / 3} >Just as he was about to give up hope, a blockchain portal shaped like a giant Krabby Patty appeared out of nowhere, engulfing Pat and transporting him to a distant galaxy where memes ruled supreme. </Typography>
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'row', mt: '3rem' }}>
          <Typography variant="h5" fontFamily={"serif"} color={"white"} width={2 / 3}>Surrounded by DOGEs wearing top hats and rare PEPEs doing the Macarena, Pat found himself in a world of blockchain memes, where every transaction was immortalized in the digital ledger with Spongebob's face. Floating in space, Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes.</Typography>
          <Box >
            <Image
              src="/memesAll.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </Box>

        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'row', mt: '3rem' }}>
          <Box>
            <Image
              src="/btc3.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </Box>

          <Typography variant="h5" fontFamily={"serif"} color={"white"} width={2 / 3}>Pat realized that sometimes, the most unexpected adventures come when you least expect them, even in the decentralized world of blockchain memes. And so, he began his new career as a meme trader, swapping Krabby PEPEs for Dogecoins and spreading laughter across the universe.  He traded doge for pepe, pepes for doge and atlast he accumulated lots for BTC , ETH and SOL with the money he made and became a RICHEST GUY IN TH TOWN   </Typography>

        </Container>
      </main>

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Box>BUY</Box>
      </main> */}

      <main className="flex flex-col items-center justify-between p-24">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h1" fontFamily={"fantasy"} color={"white"} style={{ fontWeight: 'bold' }}>TOKENOMICS</Typography>
          <Typography fontFamily={"cursive"} variant="h3" color={"white"}>Token Supply:</Typography>
          <Typography fontFamily={'sans-serif'} variant="h3" color={"white"}>100000000000</Typography>
          <Box sx={{ bgcolor: 'red', p: '1rem', borderRadius: '2rem', width: '50rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}> No Taxes, No Bullshit. It’s that simple.
              LP tokens are burnt, and contract ownership is renounced.  </Typography>

          </Box>
        </Box>
      </main>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h1" fontFamily={"fantasy"} color={"white"} style={{ fontWeight: 'bold' }}>ROADMAP</Typography>
          <Box sx={{ bgcolor: 'red', p: '1rem', borderRadius: '2rem', width: '50rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}>Phase I:  10X </Typography>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}> Phase II: 100X </Typography>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}> Phase III: 1000X </Typography>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}> Phase IV:  10000X </Typography>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}>Phase V:  To the moon</Typography>
            <Typography fontFamily={'serif'} variant="h3" color={"white"}>......................................</Typography>
          </Box>
        </Box>
      </main>
    </>

  )
}
