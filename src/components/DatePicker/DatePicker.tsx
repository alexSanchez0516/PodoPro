import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MyDatePicker({ text = "Fecha" }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={text} />
    </LocalizationProvider>
  );
}
