import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function SkillCard({ icon: Icon, title, children }) {
  return (
    <Card className="bg-zinc-800 min-h-56 rounded-2xl">
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible bg-zinc-800"
        floated={false}
        shadow={false}
      >
        <Typography variant="h5" color="white">
          {title}
        </Typography>
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </CardHeader>
      <CardBody className="grid justify-center p-4">
        <Typography className="!text-zinc-400">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
