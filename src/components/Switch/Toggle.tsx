import { Switch } from "@headlessui/react";
import { Typography } from "@mui/material";

interface ToggleProps {
  name: string;
  text: string;
  value: boolean;
  handleChange: (e: any) => void;
}

export const ToggleSwitch: React.FC<ToggleProps> = ({
  text,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="py-2 flex items-center gap-5">
      <Switch
        name={name}
        checked={value}
        onChange={handleChange}
        className={`${value ? "bg-cyan-400" : "bg-cyan-100"}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${value ? "translate-x-9" : "translate-x-0"}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Typography>{text}</Typography>
    </div>
  );
};
