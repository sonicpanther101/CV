"use client"

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Button as NextUIButton } from '@nextui-org/react';

export default function page() {

  return (
      <Stack spacing={2} direction="row">
        <Button variant="contained">mui</Button>
        <NextUIButton>next</NextUIButton>
      </Stack>
  );
}