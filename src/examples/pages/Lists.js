import React from 'react';
import Grid, { Cell } from 'react-to-mdl/lib/grid';

// These examples are the ones using in tests :)
import ListSnippets from 'react-to-mdl/lib/list/snippets';

const Page = (props) => {
  return(
    <Grid>
      <Cell col={2} className="example-block">
        <h6>Simple List</h6>
        { ListSnippets.simpleList }
      </Cell>
      <Cell col={3} className="example-block">
        <h6>List with icons</h6>
        { ListSnippets.withIcons }
      </Cell>
      <Cell col={3} className="example-block">
        <h6>List with avatars and actions</h6>
        { ListSnippets.avatarsAndActions }
      </Cell>
      <Cell col={3} className="example-block">
        <h6>List with avatars and controls</h6>
        { ListSnippets.avatarsAndControls }
      </Cell>
      <Cell col={4} className="example-block">
        <h6>List Two line</h6>
        { ListSnippets.twoLine }
      </Cell>
      <Cell col={7} className="example-block">
        <h6>List Three line</h6>
        { ListSnippets.threeLine }
      </Cell>
    </Grid>
  )
}

export default Page;
