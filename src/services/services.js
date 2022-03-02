class BurgerService {
  apiBase = `https://norma.nomoreparties.space/api/`;

  async getBurgersData() {
    try {
      const res = await fetch(`${this.apiBase}ingredients`);

      if (!res.ok) {
        throw new Error();
      }
  
      const body = await res.json();
  
      return body;
    } catch {
      throw new Error();
    }
    
  }

  async sendOrder(data) {
    try {
      const newArr = {
        ingredients: data
      };
  
      const res = await fetch(`${this.apiBase}orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newArr),
      });
  
      if (!res.ok) {
        throw new Error();
      }
  
      const body = await res.json();
  
      return body;
    } catch {
      throw new Error();
    }  
  }
}

export const burgerService = new BurgerService();