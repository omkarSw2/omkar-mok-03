import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
export default function Modals({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="image" alt="name" maxW="100px" maxH="100px" />
              <Text mt={2}>Symbol: {"symbol"}</Text>
              <Text>Current Price: {"current_price"}</Text>
              <Text>
                Price Change 24 Hour: {"price_change_percentage_24h"}%
              </Text>
              <Text>Total Volume: {"total_volume"}</Text>
              <Text>Low 24 Hour: {"low_24h"}</Text>
              <Text>High 24 Hour: {"high_24h"}</Text>
              <Text>Total Supply: {"total_supply"}</Text>
              <Text>Max Supply: {"max_supply"}</Text>
              <Text>Circulating Supply: {"circulating_supply"}</Text>
              <Text>All Time High (ath): {"ath"}</Text>
              <Text>Last Updated Date: {"last_updated"}</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
