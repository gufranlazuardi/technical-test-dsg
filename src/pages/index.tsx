import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const items = [
  {
    id: "001",
    merk: "Toyota",
    jenis: "Raize",
    jumlahStok: "3 Unit",
    harga: "Rp.170.000.000",
    keterangan: "Available",
  },
  {
    id: "002",
    merk: "Daihatsu",
    jenis: "Terios",
    jumlahStok: "2 Unit",
    harga: "Rp.150.000.000",
    keterangan: "Available",
  },
  {
    id: "003",
    merk: "BMW",
    jenis: "M1",
    jumlahStok: "1 Unit",
    harga: "Rp.550.000.000",
    keterangan: "Available",
  },
  {
    id: "004",
    merk: "Volkswagen",
    jenis: "Golf",
    jumlahStok: "1 Unit",
    harga: "$350.000.000",
    keterangan: "All Booked",
  },
  {
    id: "005",
    merk: "Toyota",
    jenis: "Kijang Innova",
    jumlahStok: "1 Unit",
    harga: "Rp.550.000.000",
    keterangan: "Available",
  },
  {
    id: "006",
    merk: "Daihatsu",
    jenis: "Sigra",
    jumlahStok: "2 Unit",
    harga: "Rp.200.000.000",
    keterangan: "All Booked",
  },
  {
    id: "007",
    merk: "Hyundai",
    jenis: "Creta",
    jumlahStok: "8 Unit",
    harga: "Rp.300.000.000",
    keterangan: "Available",
  },
];

const Home = () => {
  const [openRowMenu, setOpenRowMenu] = useState();
  const [search, setSearch] = useState("");

  const handleMenuToggle = (itemId: any) => {
    setOpenRowMenu(openRowMenu === itemId ? null : itemId);
  };

  const handleSearch = (event: any) => {
    setSearch(event?.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.merk.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col px-20 pt-12">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold">Inventory Stock</h1>
        </div>
        <div className="w-1/4 mt-6 mb-8">
          <Input
            placeholder="Cari Merk..."
            className="placeholder:italic"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Merk</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Jumlah Stok</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell className="font-medium">{item.merk}</TableCell>
                <TableCell className="font-medium">{item.jenis}</TableCell>
                <TableCell className="font-medium">{item.jumlahStok}</TableCell>
                <TableCell className="font-medium">{item.harga}</TableCell>
                <TableCell className="font-medium">{item.keterangan}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button onClick={() => handleMenuToggle(item.id)}>
                        ...
                      </button>
                    </DropdownMenuTrigger>
                    {openRowMenu === item.id && (
                      <DropdownMenuContent align="start">
                        <div className="flex flex-col gap-2 items-start pl-4 py-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="text-sm">Edit</button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader className="text-xl font-semibold">
                                Edit items
                              </DialogHeader>
                              <Separator />
                              <div className="flex flex-col text-nowrap">
                                <div className="flex gap-2">
                                  <p>Merk :</p>
                                  <input
                                    className="w-full placeholder:text-sm placeholder:italic"
                                    placeholder="Toyota"
                                  ></input>
                                </div>

                                <div className="flex gap-2">
                                  <p>Jenis :</p>
                                  <input
                                    className="w-full placeholder:text-sm placeholder:italic"
                                    placeholder="Yaris"
                                  ></input>
                                </div>

                                <div className="flex gap-2">
                                  <p>Jumlah stok :</p>
                                  <input
                                    className="w-full placeholder:text-sm placeholder:italic"
                                    placeholder="100"
                                  ></input>
                                </div>

                                <div className="flex gap-2">
                                  <p>Harga :</p>
                                  <input
                                    className="w-full placeholder:text-sm placeholder:italic"
                                    placeholder="Rp 100.000.000"
                                  ></input>
                                </div>

                                <div className="flex gap-2">
                                  <p>Keterangan :</p>
                                  <input
                                    className="w-full placeholder:text-sm placeholder:italic"
                                    placeholder="Available"
                                  ></input>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button variant={"destructive"}>Cancel</Button>
                                <Button>Save</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="text-sm text-red-500">
                                Delete
                              </button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader className="text-xl font-semibold">
                                Are you sure want to delete?
                              </DialogHeader>
                              <p className="text-sm">
                                Data akan dihapus dari database
                              </p>
                              <Separator />
                              <div className="flex gap-2">
                                <Button variant={"destructive"}>Tidak</Button>
                                <Button>Ya</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Home;
