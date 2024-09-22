import { Appointments, AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui"
import { AccessTime, DescriptionOutlined, Lens } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { FONT } from "../../utils/theme";
import { categoriesColors, CategoryColorType } from "../../types/CategoryProps";

export const AppointmentComponent = ({
  children, data, ...restProps
}: Appointments.AppointmentProps) => (
  <Appointments.Appointment
    {...restProps}
    data={data}
    style={{
      backgroundColor: categoriesColors[data.category.color as CategoryColorType].color,
      borderRadius: '4px',
    }}
  >
    {children}
  </Appointments.Appointment>
);

export const AppointmentTooltipContent = ({
  appointmentData, formatDate
}: AppointmentTooltip.ContentProps) => (
  <Box display="flex" paddingInline={1} paddingBottom={2}>
    <Grid container rowSpacing={2}>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <Lens style={{color: categoriesColors[appointmentData?.category?.color as CategoryColorType].color || "#56789F"}} fontSize="large" />
        </Grid>
        <Grid item xs={10} display="flex" alignItems="center">
          <Typography  variant="h2" fontFamily={FONT.title.fontFamily} fontWeight={400} fontSize={FONT.title.lg.size}>{appointmentData?.title}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <DescriptionOutlined fontSize="medium" />

        </Grid>
        <Grid container item xs={10} display="flex" alignItems="center">
          <Typography fontSize={FONT.body.md.size}>{appointmentData?.description}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <AccessTime fontSize="medium" />

        </Grid>
        <Grid container item xs={10} display="flex" alignItems="center">
          <Typography fontSize={FONT.body.sm.size}>{`${formatDate(appointmentData?.startDate, { hour: 'numeric', minute: 'numeric' })}
              - ${formatDate(appointmentData?.endDate, { hour: 'numeric', minute: 'numeric' })}`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);


