class BurgerService {
  apiBase = `https://norma.nomoreparties.space/api/`;

  async getBurgersData() {
    const res = await fetch(`${this.apiBase}ingredients`);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    return body;
  }
}

export const burgerService = new BurgerService();