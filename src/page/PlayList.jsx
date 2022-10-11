import styled from 'styled-components';

const PlayListBlock = styled.div`
  background-color: grey;
`;

const PlayList = () => {
  return (
    <PlayListBlock>
      <span>재생리스트</span>
    </PlayListBlock>
  );
};

export default PlayList;
