import { Header, StatsCard, TripCard } from 'components'

import { DashBoardStats, allTrips, user } from '~/constants'



const dashboard = () => {
  const { totalUsers, totalTrips, userRole, usersJoined, tripsCreated } = DashBoardStats
  return (
    <main className='dashboard wrapper'>
      <Header
        title={`Welcome ${user.name ?? "Guest"}👋`}
        description="Track Activity , trends and Popular destinations in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          <StatsCard
            header="Total Users"
            total={totalUsers}
            currentMonth={usersJoined.currentMonth}
            lastMonth={usersJoined.lastMonth}
          />
          <StatsCard
            header="Total trips"
            total={totalTrips}
            currentMonth={tripsCreated.currentMonth}
            lastMonth={tripsCreated.lastMonth}
          />
          <StatsCard
            header="Active Users"
            total={userRole.total}
            currentMonth={userRole.currentMonth}
            lastMonth={userRole.lastMonth}
          />
        </div>
      </section>
      <section className='container'>
        <h1 className='text-xl font-semibold text-dark-100 '>
          Created Trips
        </h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map(({id , name , imageUrls , itinerary , tags , travelStyle , estimatedPrice}) => (
            <TripCard key={id} id={id.toString()} name={name} imageUrl={imageUrls[0]} location={itinerary?.[0].location ?? ''} tags={tags} travelStyle={travelStyle} Price={estimatedPrice} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default dashboard