import { Container, Typography, Paper, Box } from "@mui/material";

export default function Settings() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
      </Paper>
    </Container>
  );
}
