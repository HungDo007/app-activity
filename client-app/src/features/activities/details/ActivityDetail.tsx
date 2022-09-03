import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Card, Image } from "semantic-ui-react";

import LoadingComponent from "../../../app/layout/LoadingComponent";
// import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityDetail() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    // openForm,
    // cancelSelectedActivity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent content={""} />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color="blue"
            content="Edit"
            as={Link}
            to={`/manage/${activity.id}`}
            // onClick={() => openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            as={Link}
            to="/activities"
            // onClick={cancelSelectedActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
});
