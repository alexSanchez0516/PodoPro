import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Typography } from "@mui/material";

interface ToggleProps {
  text: string; // Tipo de los datos que se utilizarán en las exportaciones (ajusta según tu estructura de datos)
}

export const ToggleSwitch: React.FC<ToggleProps> = ({ text }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-2 flex items-center gap-5">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-cyan-400" : "bg-cyan-100"}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Typography>{text}</Typography>
    </div>
  );
};
