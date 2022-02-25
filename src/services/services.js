class BurgerService {
  apiBase = `https://norma.nomoreparties.space/api/ingredients`;

  async getBurgersData() {
    const res = await fetch(this.apiBase);

    if (!res.ok) {
      throw new Error();
    }

    const body = await res.json();

    return body;
  }
}

export const burgerService = new BurgerService();