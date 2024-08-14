import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function SkillCard({ icon: Icon, title, children }) {
  return (
    <Card className="bg-zinc-800 rounded-3xl p-2">
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible bg-zinc-800 mt-2"
        floated={false}
        shadow={false}
      >
        <Typography variant="h5" color="white">
          {title}
        </Typography>
        <div className="grid mb-4 h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </CardHeader>
      <CardBody className="grid justify-center px-4 pt-2">
        <Typography className="!text-zinc-400 text-sm">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
