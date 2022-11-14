import AppHeader from "../../components/appHeader/AppHeader"

import Description from "./components/Description/Description"
import Sponsors from "./components/sponsors/Sponsors"
import Inspirations from "./components/inspirations/Inspirations"
import NFTsHints from "./components/NftsHint/NftsHint"

export default function Airbnb() {
  return (
    <>
      <Description />
      <Sponsors />
      <Inspirations />
      <NFTsHints />
    </>
  )
}