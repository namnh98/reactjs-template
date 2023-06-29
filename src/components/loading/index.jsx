import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
        style={{ bottom: '50%', left: '50%', position: 'absolute' }}
      />
    </LoadingContainer>
  );
};

export default Loading;
