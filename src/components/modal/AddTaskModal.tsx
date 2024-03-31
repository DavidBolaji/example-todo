import { useQueryClient } from "@tanstack/react-query";
import { Divider, Modal, Tag } from "antd";
import { useState, FormEvent } from "react";
import { FaFile, FaFlag } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import styled from "styled-components";

const tagList = [
  {
    name: "Today",
    icon: <FaFile />,
  },
  {
    name: "Priority",
    icon: <FaFlag />,
  },
  {
    name: "Reminder",
    icon: <FcAlarmClock />,
  },
];

const AddTaskModal: React.FC<{
  visibility: boolean;
  close: () => void;
  data?: { name: string; desc: string | null; id: string };
}> = ({ visibility, close, data }) => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(data?.id ?? "");
  const [name, setName] = useState(data?.name ?? "");
  const [desc, setDesc] = useState(data?.desc ?? "");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) {
      return alert("Name field is required");
    }

    if (!id || id.trim().length === 0) {
      await queryClient.setQueryData(["todos"], (oldData: any[]) => {
        return typeof oldData === "undefined" || !oldData
          ? [
              {
                id: new Date().toISOString(),
                name,
                desc: desc ? desc : null,
              },
            ]
          : [
              ...oldData,
              {
                id: new Date().toISOString(),
                name,
                desc: desc ? desc : null,
              },
            ];
      });
    } else {
      await queryClient.setQueryData(["todos"], (oldData: any[]) => {
        return oldData.map((d) =>
          d.id !== id
            ? d
            : {
                ...d,
                name,
                desc,
              }
        );
      });
    }

    queryClient.invalidateQueries({
      queryKey: ["todos"],
    });

    close();
    setName("");
    setDesc("");
    setId("");
  };

  return (
    <StyledModal
      mask={false}
      open={visibility}
      onCancel={close}
      footer={null}
      closeIcon={null}
    >
      <form onSubmit={handleSubmit}>
        <div className="px-[24px] pt-[20px]">
          <input
            placeholder="Task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="flex items-center w-full mt-4 space-x-2">
            {tagList.map((tag) => (
              <div key={tag.name} id={tag.name}>
                <Tag
                  className="flex items-center gap-2 py-1 text-[14px] bg-transparent cursor-pointer hover:bg-[#f5f5f5]"
                  closable={tag.name === "Today"}
                  icon={tag.icon}
                >
                  {tag.name}
                </Tag>
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <div className="flex justify-end px-[24px] gap-2 pb-4">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 font-bold text-[#444444] rounded-md bg-[#f5f5f5] 
        "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded-md bg-default_red hover:bg-hover_red"
          >
            {id.trim().length < 1 ? "Add task" : "Update task"}
          </button>
        </div>
      </form>
    </StyledModal>
  );
};

export default AddTaskModal;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0px !important;
  }
  > * input {
    display: flex;
    flex-direction: column;
    width: 100%;
    &:focus {
      outline: none;
    }
    &:first-child {
      font-size: 24px;
      font-weight: 700;
      &::placeholder {
        font-size: 24px;
        font-weight: 600;
        color: #999999;
      }
    }
    &:nth-child(2) {
      margin-top: 2px;
      padding-left: 3px;
      &::placeholder {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
`;
