import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./modals.module.css";
import { Button } from "@mui/material";

type ModalButtons = {
  content: any; //texto del botón
  primary: boolean; //botón primario o secundario, no está previsto el uso de icon-buttons
  action: any; //acción que realiza el botón
};

type modalPositionType = {
  //la posición de la ventana modal respecto la pantalla
  top: any; //valor por defecto 50% -> centrada en altura
  left: any; //valor por defecto 50% -> centrada en el ancho
};

type ModalsProps = {
  id?: any; //identificador
  open: boolean; //estado de la modal, abierta o no
  handleClose: any; //acción de cerrar la modal
  transparentBG?: boolean; //para que la modal despliegue un background oscuro y con trasparencia al abrirse, destacando la ventana modal
  width?: number; //el ancho máximo en % que ocupará la ventana modal respecto a la pantalla
  removePadding?: boolean; //minimiza el padding para aprovechar las dimensiones de la modal (especialmente útil en la modal donde desplegamos tablas o mucha info)
  hideCloseButton?: boolean; //para ocultar el bóton de cerrar (en los filtros variante modal, va en true porque usamos el botón que abre la modal como botón para cerrarla)  )
  modalAlignRight?: boolean; //para alinear la ventana modal al botón que la abre, se podrá alinear la ventana a izquierda o derecha
  title: any; //el titulo de la modal
  titleAlignLeft?: boolean; //la alineación del titulo
  large?: boolean; //para que aparezca el scroll en la ventana modal, cuando se mostrará mucho contenido
  wide?: boolean; //para hacer que la modal ocupe el 80% de la pantalla disponible, especialmente útil para mostrar tablas
  body: React.ReactNode; //el contenido de la modal -> se podría utilizar cualquier contenido pero se han definido las tres variantes principales como componentes individuales: PopUp, Large (para Tabla settear props particulares) y Filter
  buttons?: Array<ModalButtons>; //los botones en el footer de la modal
  buttonsAligned?: boolean; //para botones en una sola fila -> true o en varias filas (una por botón)
  buttonsCenter?: boolean; //para centrar los botones
};

export const CustomModalPodo = ({
  id,
  open,
  handleClose,
  transparentBG,
  width,
  removePadding,
  hideCloseButton,
  modalAlignRight,
  title,
  titleAlignLeft,
  large,
  wide,
  body,
  buttons,
  buttonsAligned,
  buttonsCenter,
}: ModalsProps) => {
  const [modalPosition, setModalPosition] = useState<modalPositionType>({
    top: "50%",
    left: "50%",
  });
  const modalWidth = !wide && width ? `${width}%` : "auto";

  useEffect(() => {
    const filterButton = document.querySelector(`#${id}-button`);
    if (filterButton != null) {
      const buttonPosition = filterButton.getBoundingClientRect();
      const gapY = 10;
      const gapX = modalAlignRight
        ? filterButton.getBoundingClientRect().width
        : 0;

      const modalPosition = {
        top:
          buttonPosition.top +
          filterButton.getBoundingClientRect().height +
          gapY,
        left: buttonPosition.left + gapX,
      };

      setModalPosition(modalPosition);
    }
  }, []);

  const CustomizedModal = styled(Modal)`
    & .MuiBackdrop-root {
      background-color: ${transparentBG ? "transparent" : "rgba(0, 0, 0, 0.5)"};
    }

    ${modalAlignRight
      ? `
      & .MuiBox-root {
        transform: translateX(-100%); 
      }
    `
      : ""}
  `;

  const boxStyle = {
    position: "absolute" as "absolute",
    //por defecto el modal sale en el centro de la pantalla,
    transform: transparentBG ? "" : "translate(-50%, -50%)", //centra el punto desde el cual se desplaza el top y el left
    top: modalPosition.top,
    left: modalPosition.left,
    width: wide ? "80%" : modalWidth,
    margin: "0 auto",
    maxHeight: "90vh",
    height: "auto",
    bgcolor: "var(--podo-white)",
    border: "1px solid var(--podo-grey)",
    borderRadius: 1.5,
    boxShadow: 24,
  };

  return (
    <CustomizedModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <div className={styles.modalContainer}>
          <div className={styles.headerContainer}>
            {!hideCloseButton && (
              <CloseIcon onClick={handleClose} className={styles.closeButton} />
            )}
            <h2
              className={`section-title ${styles.modalTitle}`}
              style={{
                // prettier-ignore
                textAlign: titleAlignLeft ? "start" : "center",
                paddingLeft: titleAlignLeft ? "1rem" : "0",
                paddingTop: hideCloseButton ? "3rem" : "0",
              }}
            >
              {title}
            </h2>
          </div>

          <div
            className={`${styles.bodyContainer} ${
              large ? styles.largeBodyContainer : ""
            }`}
            style={{
              // prettier-ignore
              padding: wide || removePadding ? "0 1rem" : "0 3rem",
              // prettier-ignore
              overflowY: large ? "scroll" : "hidden",
            }}
          >
            {body}
          </div>

          <div
            className={styles.footerContainer}
            style={{
              // prettier-ignore
              flexDirection: buttonsAligned ? "row" : "column",
              // prettier-ignore
              justifyContent: buttonsCenter ? "center" : "space-between",
              maxWidth: `${
                wide || removePadding
                  ? "calc(100% - 2rem)"
                  : "calc(100% - 6rem)"
              }`,
            }}
          >
            {buttons && buttons.length > 0 && (
              <>
                {buttons.map((item: any, index: number) => {
                  return (
                    <Button
                      key={index}
                      variant="contained"
                      color="secondary"
                      onClick={item.action}
                    ></Button>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </Box>
    </CustomizedModal>
  );
};
