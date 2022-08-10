(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Christian",
    age: 22,
    address: {
      id: 125,
      zip: "2001",
      city: "Lima",
    },
    getFullAddress() {
      return this.address?.city;
    },
  };

  const client2: Client = {
    name: "Nicolas",
    age: 23,
    address: {
      id: 126,
      zip: "2002",
      city: "Lima",
    },
    getFullAddress(id: string) {
      return this.address?.city;
    },
  };
})();
