import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cn } from "../../../utils/helpers";
import { LuPanelLeftOpen } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import DashboardMenu from "../../DashboardMenu/DashboardMenu";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";

const { Sider, Content } = Layout;

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true)
  const user = queryClient.getQueryData(['user']) as { email: string, isAuthenticated: boolean, todos: any[]}
  const navigate = useNavigate()

  useEffect(() => {
    if(!user?.isAuthenticated) return navigate('/')
    return setLoading(false)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <StyledLayout>
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        <div id="btn" className="relative flex items-center mt-5 z-[1500]">
          <div
            className={cn(
              "cursor-pointer hover:bg-[#f2efed] py-1 -top-1 absolute left-0 duration-200",
              collapsed && "-left-48"
            )}
          >
            {user?.email}
          </div>
          <div className="flex">
            <div
              className={cn(
                "cursor-pointer hover:bg-[#f2efed] px-2 py-1 top-0 absolute right-5"
              )}
            >
              <FaBell />
            </div>
            <div
              onClick={() => setCollapsed(!collapsed)}
              className={cn(
                "cursor-pointer transition-all hover:bg-[#f2efed] px-2 py-1 top-0 absolute -right-2",
                collapsed && "-right-10 delay-250"
              )}
            >
              <LuPanelLeftOpen size={16} />
            </div>
          </div>
        </div>
        <div
          className={cn(
            " px-2 py-1 top-3 absolute transition-all duration-200 -left-0 w-full delay-50",
            collapsed && "-left-48"
          )}
        >
          <DashboardMenu />
        </div>
      </StyledSider>
      <StyledLayout collapsed={collapsed}>
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </StyledLayout>
  );
};

export default DashboardLayout;

interface StyledLayoutProps {
  collapsed?: boolean;
}



const StyledLayout = styled(Layout)<StyledLayoutProps>`
  height: 100vh;
  .ant-layout {
    background-color: #ffffff !important;
  }
`;

const StyledSider = styled(Sider)`
  background-color: #fcfaf8 !important;
  min-width: 300px !important;
  position: relative !important;
  padding-left: ${(props) => (props.collapsed ? "" : "20px")};
  padding-right: ${(props) => (props.collapsed ? "" : "20px")};
  width: ${(props) => (props.collapsed ? "0px !important" : "")};
  max-width: ${(props) => (props.collapsed ? "0px !important" : "")};
  min-width: ${(props) => (props.collapsed ? "0px !important" : "")};

  .ant-menu {
    background-color: #fcfaf8;
  }
`;

const StyledContent = styled(Content)`
  padding: 70px 150px;
`;
