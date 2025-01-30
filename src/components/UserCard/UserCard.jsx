import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  requestToFollow,
  respondFollowRequest,
} from "../../views/People/peopleController";
import "./UserCard.css";

export default function UserCard({ user, onAction }) {
  const navigate = useNavigate();

  return (
    <div className="user-card">
      <p
        className={`user-card__username ${
          user.is_following ? "user-card__username--clickable" : ""
        }`}
        onClick={() => {
          if (user.is_following) {
            navigate(`/profile/${user.user_id}`);
          }
        }}
      >
        @{user.username}
      </p>

      <div className="user-card__actions">
        {!user.is_following ? (
          user.follow_request_sent ? (
            <p className="user-card__status">Follow Request Sent</p>
          ) : (
            <button
              className="user-card__button"
              onClick={() => requestToFollow(user.user_id, onAction)}
            >
              Send Follow Request
            </button>
          )
        ) : (
          <p className="user-card__status">Following ✓</p>
        )}
      </div>

      {user.follow_request_pending && (
        <div className="user-card__follow-request">
          <p>Accept Follow Request?</p>
          <button
            className="user-card__button user-card__button--accept"
            onClick={() => respondFollowRequest(user.user_id, true, onAction)}
          >
            ✓
          </button>
          <button
            className="user-card__button user-card__button--decline"
            onClick={() => respondFollowRequest(user.user_id, false, onAction)}
          >
            ✗
          </button>
        </div>
      )}
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    is_follower: PropTypes.bool.isRequired,
    is_following: PropTypes.bool.isRequired,
    user_id: PropTypes.number.isRequired,
    follow_request_pending: PropTypes.bool.isRequired,
    follow_request_sent: PropTypes.bool.isRequired,
  }).isRequired,
  onAction: PropTypes.func.isRequired,
};
