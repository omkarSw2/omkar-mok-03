import React from "react";
import {
  Stack,
  Tr,
  Td,
  Avatar,
  Heading,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";


const TableRow = ({
  image,
  name,
  id,
  symbol,
  current_price,
  price_change_percentage_24h,
  market_cap,
  currency,

  total_volume,
  low_24h,
  high_24h,
  total_supply,
  max_supply,
  circulating_supply,
  ath,
  last_updated,
}) => {
  let sign = currency === "inr" ? "₹" : currency === "usd" ? "$" : "Є";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tr key={id} onClick={onOpen}>
        <Td>
          <Stack direction="row">
            <Avatar name={name} src={image} />
            <Stack direction="column">
              <Heading as="h6" size="sm">
                {symbol.toUpperCase()}
              </Heading>
              <Heading as="h6" size="xs">
                {name}
              </Heading>
            </Stack>
          </Stack>
        </Td>
        <Td>
          {sign} {current_price}
        </Td>
        <Td>{price_change_percentage_24h.toFixed(2)}</Td>
        <Td>
          {sign} {market_cap}
        </Td>
      </Tr>{" "}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src={image} alt={name} maxW="100px" maxH="100px" />
              <Text mt={2}>Symbol: {symbol}</Text>
              <Text>Current Price: {current_price}</Text>
              <Text>Price Change 24 Hour: {price_change_percentage_24h}%</Text>
              <Text>Total Volume: {total_volume}</Text>
              <Text>Low 24 Hour: {low_24h}</Text>
              <Text>High 24 Hour: {high_24h}</Text>
              <Text>Total Supply: {total_supply}</Text>
              <Text>Max Supply: {max_supply}</Text>
              <Text>Circulating Supply: {circulating_supply}</Text>
              <Text>All Time High (ath): {ath}</Text>
              <Text>Last Updated Date: {last_updated}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableRow;
