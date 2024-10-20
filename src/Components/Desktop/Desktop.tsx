import { Wordpad } from "@react95/icons";

import { DesktopIcon } from "./DesktopIcon";
import "./Desktop.scss";
import { useState } from "react";
import { Modal, TitleBar } from "@react95/core";

const Desktop = () => {
  const [modalData, setModalData] = useState<any>(null);

  const onClickLinkedin = () => {
    setModalData({
      title: "My Linkedin",
      url: "http://localhost:3000",
    });
  };

  const onClickCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="desktop">
      <DesktopIcon
        Icon={Wordpad}
        text="My LinkedIn"
        onClick={onClickLinkedin}
      />
      {/* <DesktopIcon type={IconType.Explore} text="Navegador" />
      <DesktopIcon type={IconType.MediaCd} text="Tchururu" /> */}

      {modalData && (
        <Modal
          dragOptions={{
            defaultPosition: {
              x: 100,
              y: 100,
            },
          }}
          width="80%"
          height="80%"
          icon={<Wordpad variant="16x16_4" />}
          title={modalData.title}
          titleBarOptions={[
            <TitleBar.Close key="close" onClick={onClickCloseModal} />,
          ]}
        >
          {/* @ts-ignore */}
          <Modal.Content>
            <iframe
              style={{ width: "100%", height: "100%" }}
              src={modalData.url}
            ></iframe>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};

export default Desktop;
