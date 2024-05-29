import { Container, VStack, Heading, Text, Box } from "@chakra-ui/react";

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Booking Confirmation</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg" mb={2}><strong>Confirmation Number:</strong> {bookingDetails.confirmationNumber}</Text>
          <Text fontSize="lg" mb={2}><strong>Departure City:</strong> {bookingDetails.departureCity}</Text>
          <Text fontSize="lg" mb={2}><strong>Destination City:</strong> {bookingDetails.destinationCity}</Text>
          <Text fontSize="lg" mb={2}><strong>Departure Date:</strong> {bookingDetails.departureDate}</Text>
          <Text fontSize="lg" mb={2}><strong>Return Date:</strong> {bookingDetails.returnDate}</Text>
          <Text fontSize="lg" mb={2}><strong>Passengers:</strong> {bookingDetails.passengers}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;