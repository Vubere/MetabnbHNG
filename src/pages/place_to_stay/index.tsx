
import Navigation from "./components/navigation/Navigation"
import NtfShowCase from "./components/display/NtfDisplay"

export default function PlaceToStay() {
  return (
    <section className="placeToStay">
      <Navigation />
      <div className="showCaseContainer">
        <NtfShowCase />
      </div>
    </section>
  )
}