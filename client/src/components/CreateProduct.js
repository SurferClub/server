import { Card, CardContent, Typography, form, TextField } from "@mui/material";
import React from "react";

export default function CreateProduct() {
  return (
    <Card>
      <CardContent>
        <Typography>Create Product</Typography>
        <form action="">
          <TextField variant="filled" label="nombre de producto"></TextField>
        </form>
      </CardContent>
    </Card>
  );
}
