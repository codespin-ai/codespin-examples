import axios from "axios";
import { format } from "./formatter";

/**
 * Converts currencies using exchange rates from a free service.
 * @param fromCurrency The currency to convert from.
 * @param toCurrency The currency to convert to.
 * @returns The converted value in the following structure: { amount: number, date: <time of API call> }.
 */
export async function currencyConvert(fromCurrency: string, toCurrency: string): Promise<{ amount: number, date: string }> {
  try {
    // Fetch exchange rate from a free service
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const exchangeRate = response.data.rates[toCurrency];

    // Perform the conversion
    const convertedValue = 1 / exchangeRate;

    return format({ value: convertedValue.toString() });
  } catch (error) {
    console.error("An error occurred while converting currencies:", error);
    throw error;
  }
}