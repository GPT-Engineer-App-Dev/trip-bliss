import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FlightSearch from "./pages/FlightSearch.jsx"; // Import the new FlightSearch component
import BookingConfirmation from "./pages/BookingConfirmation.jsx"; // Import the new BookingConfirmation component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/search-flights" element={<FlightSearch />} /> {/* Add the new route */}
      <Route path="/booking-confirmation" element={<BookingConfirmation bookingDetails={{
          confirmationNumber: "ABC123",
          departureCity: "New York",
          destinationCity: "London",
          departureDate: "2023-12-01",
          returnDate: "2023-12-15",
          passengers: 2
        }} />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
