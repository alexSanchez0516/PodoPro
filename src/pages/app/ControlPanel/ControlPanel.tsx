import {
  Box,
  Button,
  Card,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowModes,
} from "@mui/x-data-grid";
import Exports from "../../../components/Buttons/Exports";
import { FaEye, FaRegFileExcel } from "react-icons/fa6";
import { Create, Delete, Edit } from "@mui/icons-material";
import { SyntheticEvent, useEffect, useMemo, useState } from "react";
import DataGridEditabled from "../../../components/DataGridEditabled/DataGridEditabled";
import controlsService from "../../../services/Control/controls";
import {
  ClinicRequestGET,
  DatumPorcentageDiscountBenefitResponseGETForComponetList,
  DatumTaxesResponseGETForComponetList,
  DatumWorkCenterResponseGETForComponetList,
  Meta,
  PorcentageDiscountBenefitResponseGET,
  ServicesResponseGETFormComponetList,
  ServicesResponseGETFullPopulate,
  TaxImpRequestGET,
} from "../../../interfaces/interfaces";
import { useModalsStore } from "../../../zustand/useModalsStore";
import { MODAL_TYPE } from "../../../constants/constants";
import { ModalManagement } from "../../../components/Modal/ModalManagement";
import { PodoTable } from "../../../components/TablePodo/Table";
import { usePodoTable } from "../../../hooks/usePodoTable";
import { useTableCrudBasic } from "../../../hooks/useTableCrudBasic";
import icons from "../../../Utils/icons";
import { toast } from "sonner";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ControlPanel = () => {
  const {
    rows,
    handleAddRow,
    handleCancelClick,
    handleDeleteClick,
    handleEditClick,
    handleSaveClick,
    rowModesModel,
    setRowModesModel,
    setRows,
  } = usePodoTable();
  const { handleService } = useTableCrudBasic();
  const [listPorcetagesDiscounts, setListPorcetagesDiscounts] = useState<
    DatumPorcentageDiscountBenefitResponseGETForComponetList[]
  >([]);
  const [listPorcetagesBenefit, setListPorcetagesBenefit] = useState<
    DatumPorcentageDiscountBenefitResponseGETForComponetList[]
  >([]);
  const [listPorcetagesTaxes, setListPorcetagesTaxes] = useState<
    DatumTaxesResponseGETForComponetList[]
  >([]);
  const [listWorkCenters, setListWorkCenters] = useState<
    DatumWorkCenterResponseGETForComponetList[]
  >([]);

  const [listServices, setListServices] = useState<
    ServicesResponseGETFormComponetList[]
  >([]);

  const [loadingPorcentageDiscount, setLoadingPorcentageDiscount] =
    useState(true);

  const [loadingPorcentageBenefit, setLoadingPorcentagBenefit] = useState(true);
  const [loadingTaxes, setLoadingTaxes] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingWorkCenters, setLoadingWorkCenters] = useState(true);
  const [
    paginationInfoPorcentageDiscount,
    setPaginationInfoPorcentageDiscount,
  ] = useState<Meta>();
  const [paginationInfoPorcentageBenefit, setPaginationInfoPorcentageBenefit] =
    useState<Meta>();
  const [paginationInfoTaxes, setPaginationInfoTaxes] = useState<Meta>();
  const [paginationInfoServices, setPaginationInfoServices] = useState<Meta>();
  const [paginationInfoWorkCenters, setPaginationInfoWorkCenters] =
    useState<Meta>();
  const toggleModal = useModalsStore((state) => state.toggleModal);

  const [value, setValue] = useState(0);

  const columnslistPorcetagesDiscounts: GridColDef[] = useMemo(() => {
    return [
      {
        field: "porcentage_value",
        headerName: "Valor",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: "Fecha creación",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "updatedAt",
        headerName: "Fecha Edición",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "active",
        headerName: "Activo",
        type: "boolean",
        editable: true,
        flex: 2,
      },
      {
        field: "actions",
        width: 140,
        headerName: "Acciones",
        renderCell: () => {
          return (
            <div className="w-full">
              <Button color="primary" className="">
                <Edit />
              </Button>
              <Button color="error" className="">
                <Delete />
              </Button>
            </div>
          );
        },
      },
    ];
  }, []);
  const columnslistTaxes: GridColDef[] = useMemo(() => {
    return [
      {
        field: "name",
        headerName: "Identificador Impuesto",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "porcentage",
        headerName: "Valor",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: "Fecha creación",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "updatedAt",
        headerName: "Fecha Edición",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "active",
        headerName: "Activo",
        type: "boolean",
        editable: true,
        flex: 2,
      },
      {
        field: "actions",
        width: 140,
        headerName: "Acciones",
        renderCell: () => {
          return (
            <div className="w-full">
              <Button color="primary" className="">
                <Edit />
              </Button>
              <Button color="error" className="">
                <Delete />
              </Button>
            </div>
          );
        },
      },
    ];
  }, []);
  const columnslistWorkCenter: GridColDef[] = useMemo(() => {
    return [
      {
        field: "id",
        headerName: "ID",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "name",
        headerName: "Nombre",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "tax_name",
        headerName: "CIF",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Teléfono",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "address",
        headerName: "Dirección",
        type: "string",
        editable: true,
        flex: 2,
      },
      {
        field: "city",
        headerName: "Ciudad",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "nameTypeClinic",
        headerName: "Tipo de clínica",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "active",
        headerName: "Activo",
        type: "boolean",
        editable: true,
        flex: 0,
      },
      {
        field: "actions",
        type: "actions",
        width: 200,
        headerName: "Acciones",
        headerAlign: "center",
        getActions: ({ id }) => {
          // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

          return [
            <GridActionsCellItem
              icon={
                <Tooltip title="Borrar">
                  <icons.InfoIcon />
                </Tooltip>
              }
              label="Delete"
              className="action"
              color="inherit"
              // Set de las filas provisional hasta que se solucione en la librería de componentes.
              onClick={() => {
                toggleModal(MODAL_TYPE.WORK_CENTER_EDIT);
              }}
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="Guardar">
                  <icons.SaveIcon />
                </Tooltip>
              }
              label="Save"
              className="action"
              onClick={() => {
                console.log("ejecuta guardado de este id: --> ", id);
                handleSaveClick(id);
              }}
            />,

            <GridActionsCellItem
              icon={
                <Tooltip title="Cancelar">
                  <icons.CancelIcon />
                </Tooltip>
              }
              label="Cancel"
              className="action"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="Editar">
                  <icons.EditIcon />
                </Tooltip>
              }
              label="Edit"
              className="action"
              onClick={handleEditClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={
                <Tooltip title="Borrar">
                  <icons.DeleteIcon />
                </Tooltip>
              }
              label="Delete"
              className="action"
              color="inherit"
              // Set de las filas provisional hasta que se solucione en la librería de componentes.
              // onClick={() =>
              //   handleDeleteClick(
              //     params.row.id,
              //     null
              //     // handleDelete({
              //     //   id,
              //     //   service: deleteCopativeObjective,
              //     //   rows,
              //     //   setRows
              //     // })
              //   ) as any
              // }
            />,
          ];
        },

        // renderCell: (params) => {
        //   return (
        //     <div className="w-full">

        //       ,
        //     </div>
        //   );
        // },
      },
    ];
  }, []);

  const columnslistServices: GridColDef[] = useMemo(() => {
    return [
      {
        field: "name",
        headerName: "Nombre",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "description",
        headerName: "Descripcion",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "price_unit",
        headerName: "Importe",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: "Fecha creación",
        type: "string",
        editable: true,
        flex: 1,
      },
      {
        field: "active",
        headerName: "Activo",
        type: "boolean",
        editable: true,
        flex: 0,
      },
      {
        field: "actions",
        width: 140,
        headerName: "Acciones",
        renderCell: () => {
          return (
            <div className="w-full">
              <Button color="primary" className="">
                <Edit />
              </Button>
              <Button color="error" className="">
                <Delete />
              </Button>
            </div>
          );
        },
      },
    ];
  }, []);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleError = (row: any) => {
    if (!row.number) {
      toast.error("Compruebe los campos");
      throw Error();
    }
  };
  const handleChangeRows = (newRow: any, oldRow: any) => {
    setRows(rows.map((row: any) => (row.id === oldRow.id ? newRow : row)));
  };

  useEffect(() => {
    controlsService
      .getAllPorcentageDiscount()
      .then((response: PorcentageDiscountBenefitResponseGET) => {
        setListPorcetagesDiscounts(
          response.data.map(({ id, attributes }) => ({
            id,
            ...attributes,
          }))
        );
        setPaginationInfoPorcentageDiscount(response.meta);
      })
      .finally(() => {
        setLoadingPorcentageDiscount(false);
      });
    controlsService
      .getAllPorcentageBenefit()
      .then((response: PorcentageDiscountBenefitResponseGET) => {
        setListPorcetagesBenefit(
          response.data.map(({ id, attributes }) => ({
            id,
            ...attributes,
          }))
        );
        setPaginationInfoPorcentageBenefit(response.meta);
      })
      .finally(() => {
        setLoadingPorcentagBenefit(false);
      });
    controlsService
      .getAllTaxes()
      .then((response: TaxImpRequestGET) => {
        setListPorcetagesTaxes(
          response.data.map(({ id, attributes }) => ({
            id,
            ...attributes,
          }))
        );
        setPaginationInfoTaxes(response.meta);
      })
      .finally(() => {
        setLoadingTaxes(false);
      });
    controlsService
      .getAllWorkCenters()
      .then((response: ClinicRequestGET) => {
        const mappedData = response.data.map((clinic) => {
          return {
            id: clinic.id,
            name: clinic?.attributes?.name,
            active: clinic?.attributes?.active,
            country: clinic?.attributes?.country,
            email: clinic?.attributes?.email,
            city: clinic?.attributes?.city,
            tax_name: clinic?.attributes?.tax_name,
            code_postal: clinic?.attributes?.code_postal,
            phone: clinic?.attributes?.phone,
            createdAt: clinic?.attributes?.createdAt,
            updatedAt: clinic?.attributes?.updatedAt,
            publishedAt: clinic?.attributes?.publishedAt,
            address: clinic?.attributes?.address,
            patients: clinic?.attributes?.patients?.data,
            services: clinic?.attributes?.services?.data,
            nameTypeClinic:
              clinic?.attributes?.work_center_type?.data?.attributes?.name,
            idTypeClinic: clinic?.attributes?.work_center_type?.data?.id,
          };
        });
        setRows(mappedData);
        setListWorkCenters(mappedData);
        setPaginationInfoWorkCenters(response.meta);
      })
      .finally(() => {
        setLoadingWorkCenters(false);
      });

    controlsService
      .getAllServices()
      .then((response: ServicesResponseGETFullPopulate) => {
        const mappedData: any = response.data.map((item?) => ({
          id: item?.id,
          name: item?.attributes?.name,
          description: item?.attributes?.description,
          price_unit: item?.attributes?.price_unit,
          active: item?.attributes?.active,
          createdAt: item?.attributes?.createdAt,
          updatedAt: item?.attributes?.updatedAt,
          publishedAt: item?.attributes?.publishedAt,
          paid_insurance: item?.attributes?.paid_insurance,
          img: item?.attributes?.img,
        }));
        setListServices(mappedData);
        setPaginationInfoServices(response.meta);
      })
      .finally(() => {
        setLoadingServices(false);
      });
  }, []);

  return (
    <>
      <ModalManagement />
      {
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          <Card className="w-full md:mx-5">
            <div className="flex flex-col p-5 justify-center items-center flex-wrap w-full mt-5">
              <div className="mx-5 mb-10 gap-2 flex ">
                <Exports />
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FaRegFileExcel />}
                >
                  Importar Registro/s
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<Create />}
                >
                  Crear Registro
                </Button>
              </div>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Clinicas" {...a11yProps(0)} />
                    <Tab label="Porcentajes Descuentos" {...a11yProps(1)} />
                    <Tab label="Porcentages Beneficios" {...a11yProps(2)} />
                    <Tab label="Impuestos" {...a11yProps(3)} />

                    <Tab label="Servicios" {...a11yProps(4)} />
                    <Tab label="Alertas" {...a11yProps(5)} />
                    <Tab label="Ubicaciones servicios" {...a11yProps(6)} />
                    <Tab label="Estados Citas" {...a11yProps(7)} />

                    {/* <Tab label="Ajustes" {...a11yProps(3)} /> */}
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                    <PodoTable
                      rows={rows as unknown}
                      setRowModesModel={setRowModesModel}
                      setRows={setRows}
                      rowModesModel={rowModesModel}
                      columns={columnslistWorkCenter}
                      columnVisibilityModel={{ id: false }}
                      // createWorkCenter
                      postService={(row: any) => {
                        console.log("llamando");
                        handleError(row);
                        handleService({
                          row,
                          service: controlsService.createWorkCenter,
                          action: handleChangeRows,
                        });
                      }}
                      loading={loadingWorkCenters}
                      globalActions={[
                        {
                          Icon: icons.AddCircleIcon,
                          action: () => handleAddRow(),
                        },
                      ]}
                    ></PodoTable>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                    <DataGridEditabled
                      loading={loadingPorcentageDiscount}
                      onlyEdit={true}
                      showHeader={false}
                      rows={listPorcetagesDiscounts ?? []}
                      columns={columnslistPorcetagesDiscounts}
                      // onCellClick={(event: any) => onCellClick(event)}
                      hideFooterPagination={false}
                      rowCount={0}
                      rowsPerPageOptions={[50]}
                      pagination
                      page={paginationInfoPorcentageDiscount?.pagination.page}
                      pageSize={
                        paginationInfoPorcentageDiscount?.pagination.pageSize
                      }
                      // onPageChange={handleNewPage}
                    ></DataGridEditabled>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                    <DataGridEditabled
                      loading={loadingPorcentageBenefit}
                      onlyEdit={true}
                      showHeader={false}
                      rows={listPorcetagesBenefit ?? []}
                      columns={columnslistPorcetagesDiscounts}
                      // onCellClick={(event: any) => onCellClick(event)}
                      hideFooterPagination={false}
                      rowCount={0}
                      rowsPerPageOptions={[50]}
                      pagination
                      page={paginationInfoPorcentageBenefit?.pagination.page}
                      pageSize={
                        paginationInfoPorcentageBenefit?.pagination.pageSize
                      }
                      // onPageChange={handleNewPage}
                    ></DataGridEditabled>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                    <DataGridEditabled
                      loading={loadingTaxes}
                      onlyEdit={true}
                      showHeader={false}
                      rows={listPorcetagesTaxes ?? []}
                      columns={columnslistTaxes}
                      // onCellClick={(event: any) => onCellClick(event)}
                      hideFooterPagination={false}
                      rowCount={0}
                      rowsPerPageOptions={[50]}
                      pagination
                      page={paginationInfoTaxes?.pagination.page}
                      pageSize={paginationInfoTaxes?.pagination.pageSize}
                      // onPageChange={handleNewPage}
                    ></DataGridEditabled>
                  </div>
                </CustomTabPanel>{" "}
                <CustomTabPanel value={value} index={4}>
                  <div className="md:my-8 md:mx-5 w-full flex flex-col items-center">
                    <DataGridEditabled
                      loading={loadingServices}
                      onlyEdit={true}
                      showHeader={false}
                      rows={listServices ?? []}
                      columns={columnslistServices}
                      // onCellClick={(event: any) => onCellClick(event)}
                      hideFooterPagination={false}
                      rowCount={0}
                      rowsPerPageOptions={[50]}
                      pagination
                      page={paginationInfoServices?.pagination.page}
                      pageSize={paginationInfoServices?.pagination.pageSize}
                      // onPageChange={handleNewPage}
                    ></DataGridEditabled>
                  </div>
                </CustomTabPanel>
              </Box>
            </div>
          </Card>
        </Box>
      }
    </>
  );
};

export default ControlPanel;
