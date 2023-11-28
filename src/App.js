import "./App.css";
import {
  Stack,
  Box,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Center,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Container,
  Button,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import TableRow from "./components/TableRow";

const getData = async (page, currency, sort) => {
  let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h&locale=en&precision=2`;
  if (sort.length > 0) {
    url += `&order=${sort}`;
  }
  console.log(url);

  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log({ msg: "error to fetch the data", error });
  }
};

function App() {
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  // console.log(page);
  const handlePage = (val) => {
    setPage((prev) => prev + val);
  };

  useEffect(() => {
    getData(page, currency, sort).then((d) => {
      console.log(d);
      setData(d);
    });
  }, [currency, page, sort]);
  // [currency, page, sort]
  return (
    <div className="App">
      <Center mt={5}>
        <Stack spacing={8} direction="row">
          <Box>
            <InputGroup>
              <InputLeftAddon children=<Search2Icon /> />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
          </Box>
          <Box>
            <Select
              placeholder="Currency"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}>
              <option value="inr">INR</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </Select>
          </Box>
          <Box>
            <Select
              placeholder="Sort"
              onChange={(e) => {
                setSort(e.target.value);
              }}>
              <option value="market_cap_asc">Low to High</option>
              <option value="market_cap_desc">High to Low</option>
            </Select>
          </Box>
        </Stack>
      </Center>

      <Container maxW="container.lg" mt={8}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Coin</Th>
                <Th>Price</Th>
                <Th> 24h Changes</Th>
                <Th> Market Cap</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => (
                <TableRow {...item} currency={currency} />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Coin</Th>
                <Th>Price</Th>
                <Th> 24h Changes</Th>
                <Th> Market Cap</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Container>

      <Center gap={5}>
        <Button
          isDisabled={page <= 1}
          colorScheme="telegram"
          onClick={(e) => {
            handlePage(-1);
          }}>
          Prev
        </Button>
        <Button
          colorScheme="telegram"
          onClick={(e) => {
            handlePage(1);
          }}>
          Next
        </Button>
      </Center>
    </div>
  );
}

export default App;
