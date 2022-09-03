import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../app/stores/store";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { activityRegistry, loadingInitial, loadActivities } = activityStore;
  // const { selectedActivity, editMode } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) {
      loadActivities();
    }
  }, [loadActivities, activityRegistry]);

  if (loadingInitial) return <LoadingComponent content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* {selectedActivity && !editMode && <ActivityDetail />}
        {editMode && <ActivityForm />} */}
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
});
