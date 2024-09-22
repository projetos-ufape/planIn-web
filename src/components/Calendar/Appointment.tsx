import { Appointments, AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui"
import { AccessTime, DeleteOutline, DescriptionOutlined, Lens, ModeEditOutline } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { FONT } from "../../utils/theme";
import { categoriesColors, CategoryColorType } from "../../types/CategoryProps";
import { useTask } from "../../hooks/useTask";

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
  appointmentData, formatDate, 
}: AppointmentTooltip.ContentProps) => {
  const { deleteTask } = useTask();

  return (
  <Box display="flex" paddingInline={1} paddingBottom={2}>
    <Grid container rowSpacing={2}>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <DescriptionOutlined fontSize="medium" />

        </Grid>
        <Grid item xs={10} display="flex" alignItems="center">
          <Typography fontSize={FONT.body.md.size}>{appointmentData?.description}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={2} display="flex" alignItems="center" justifyContent="center">
          <AccessTime fontSize="medium" />
        </Grid>
        <Grid item xs={10} display="flex" alignItems="center">
          <Typography fontSize={FONT.body.sm.size}>{`${formatDate(appointmentData?.startDate, { hour: 'numeric', minute: 'numeric' })}
              - ${formatDate(appointmentData?.endDate, { hour: 'numeric', minute: 'numeric' })}`}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} columnSpacing={1}>
        <Grid item xs={10} display="flex" alignItems="center" justifyContent="flex-end" gap={1}>
          <IconButton  
          >
            <ModeEditOutline fontSize="medium" />
          </IconButton>
          <IconButton 
            onClick={() => deleteTask(String(appointmentData?.id))}
          >
            <DeleteOutline fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  </Box>
)};

export const AppointmentTooltipHeader = ({
  appointmentData,
  children,
  ...restProps
}: AppointmentTooltip.HeaderProps) => {
  return (
    <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData}>
      <Box display="flex" flexDirection="row" gap={1} alignSelf="center" width="100%" paddingLeft={2}>
        <Lens
          style={{
            color:
              categoriesColors[
                appointmentData?.category?.color as CategoryColorType
              ].color || "#56789F",
          }}
          fontSize="medium"
        />
        <Typography
          variant="h2"
          fontFamily={FONT.title.fontFamily}
          fontWeight={400}
          fontSize={FONT.title.lg.size}
        >
          {appointmentData?.title}
        </Typography>
      </Box>
      {children}
    </AppointmentTooltip.Header>
  );
};